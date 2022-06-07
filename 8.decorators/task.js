function add(...args) {
  return args.reduce((acc, item) => acc += item);
};

function cachingDecoratorNew(func) {
  let hash = {};

  return (...args) => {
    const currentArgs = args.join(',');
    
    if (currentArgs in hash) {
      return `Из кэша: ${hash[currentArgs]}`;
    } else if (Object.keys(hash).length === 5){
      hash = Object.fromEntries(Object.entries(hash).splice(1));
    };

    return `Вычисляем: ${hash[currentArgs] = func(...args)}`;
  };
};

const addWithCashing = cachingDecoratorNew(add);

const sendSignal = () => console.log("Сигнал отправлен");

function debounceDecoratorNew(func, ms) {
  let isThrottled = false, timerId;

  return () => {
    if (isThrottled) {
      clearTimeout(timerId);
    } else {
      func();
      isThrottled = true;
    };

    timerId = setTimeout(() => {
      isThrottled = false;
      func();
    }, ms);
  };
};

const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);

function debounceDecorator2(func) {
  return () => {
    func.count === undefined ? func.count = 1 : func.count++;
    console.log(func.count);
    func();
  };
};

const upgradedSendSignal2 = debounceDecorator2(upgradedSendSignal);

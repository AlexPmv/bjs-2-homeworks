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

const sendSignal = (args) => console.log(`Клик:${args.join(',')}`);

function debounceDecoratorNew(func, ms) {
  let isThrottled = false, timerId;

  return wrapper = (...args) => {
    if (isThrottled) {
      clearTimeout(timerId);
    } else {
      func(args);
      isThrottled = true;
    };

    timerId = setTimeout(() => {
      isThrottled = false;
      func(args);
    }, ms);
  };
};

const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);

function debounceDecorator2(func, ms) {
  let isThrottled = false, timerId;

  return wrapper = (...args) => {
    wrapper.count === undefined ? wrapper.count = 1 : wrapper.count++;
    
    if (isThrottled) {
      clearTimeout(timerId);
    } else {
      func(args);
      isThrottled = true;
    };

    timerId = setTimeout(() => {
      isThrottled = false;
      func(args);
    }, ms);
  };
};

const upgradedSendSignal2 = debounceDecorator2(sendSignal, 2000);

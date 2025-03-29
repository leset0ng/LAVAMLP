/**
 * 将小米的傻逼callback转成promise
 */
declare function asyncFunc<T>(func: ({success:(data:T) => void}) => void, params: Object): Promise<T>;
export default asyncFunc;
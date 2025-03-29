/**
 * 将小米的傻逼callback转成promise
 * @template T
 * @param {Function} func 原来的函数
 * @param {Object} params 函数要的参数
 * @returns {Promise<T>} 函数返回的值
 * @throws {Error} 函数返回的错误
 * @author lesetong
 */
export default function asyncRun(func, params) {
    return new Promise((resolve, reject) => func({
        success: resolve,
        fail: (data, code) => reject(new Error(`${code}:${data}`)),
        ...params
    }))
}
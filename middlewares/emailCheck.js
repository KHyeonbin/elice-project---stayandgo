module.exports = (req, res, next) => {
    // 서버에서 한 번 더 양식을 체크하는 미들웨어
    const {email} = req.body;
    if(!/^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)){
        const error = new Error();
        Object.assign(error, {code: 400, message: "이메일 형식을 다시 확인해주세요. (server check)"})
        throw error;
    }
    next();
}

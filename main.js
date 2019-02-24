// ASYNC AWAIT
const gf = async () => {
    let data = await new Promise((res, rej) => {
        setTimeout(() => {
            res("gf");
        }, 100)
    });
    return data;
}


gf().then(rej => {
    console.log(rej);
});
console.log("object");
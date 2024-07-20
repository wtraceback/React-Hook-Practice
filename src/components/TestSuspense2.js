let promiseStatus = 'pending'
const promise = new Promise((resolver) => {
    setTimeout(() => {
        resolver();
        promiseStatus = 'resolved'
    }, 1000)
}, () => {})

function getData() {
    console.log("getData");
    if (promiseStatus === 'pending') {
        throw promise;
    } else {
        return 'hello world'
    }
}

function TestSuspense2() {
    console.log("getData running");
    const data = getData()
    console.log("data = ", data);

    return (
        <div>
            TestSuspense2 data = {data}
        </div>
    )
}

export default TestSuspense2
import { useState, useMemo } from 'react'

function TestUseMemo() {
    const list = ['DO homework', 'Clean Rooms', 'Coding', 'Watering Flower']
    const [name, setName] = useState('')
    const [search, setSearch] = useState('')

    // 因为 filteredList 跟 search 有关，所以 search 改变，重新计算一下 filteredList 可以理解
    // 但是目前的问题是 name 改变，重新渲染，filteredList 还是会被重新计算一遍，性能就不高了
    // const filteredList = list.filter(item => item.indexOf(search) > -1)
    // console.log("filteredList calculated")

    /*
        useMemo 和 useEffect 的区别
            useMemo 相当于做了一个缓存
            useMemo 是在 render 运行的过程中执行的，从上往下顺序执行
            useEffect 是在 render 结束后再执行的
    */
    const filteredList = useMemo(() => {
        console.log("filteredList calculated");
        return list.filter(item => item.indexOf(search) > -1)
    }, [search])

    return (
        <div>
            <div>
                name: <input value={name} onChange={(e) => {setName(e.target.value)}} />
            </div>
            <div>
                search: <input value={search} onChange={(e) => {setSearch(e.target.value)}} />
            </div>
            <div>
                <select>
                    {
                        filteredList.map(item => {
                            return <option key={item}>{item}</option>
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default TestUseMemo
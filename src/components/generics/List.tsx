import React from 'react'

type ListProps<T> = {
    items: T[]
    clickHandler: (value: T) => void
}

const style = {
    item: {
        padding: '24px',
        backgroundColor: 'lightblue',
        margin: '8px',
        cursor: 'pointer'
    }
}
// id number constraint
// export const ListComponent = <T extends { id: number}>({ items, clickHandler }: ListProps<T>) => {

export const ListComponent = <T extends string | number>({ items, clickHandler }: ListProps<T>) => {
  return (
    <div>
        <div>List</div>
        <ul>
            {
                items.map((item, index) => {
                    return (<li 
                                style={style.item}
                                key={index}
                                onClick={() => clickHandler(item)}
                                >
                                {item}
                            </li>)
                })
            }
        </ul>
    </div>
  )
}

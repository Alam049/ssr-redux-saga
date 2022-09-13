import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { loadUsersStart } from "../../redux/actions"


export async function getServerSideProps() {

    const { users, loading, error } = useSelector((state) => state.data)
    // const dispatch = useDispatch()


    // dispatch(loadUsersStart())



    return {
        props : {users}
    }
}

const Table = ({users}) => {

    // const { users, loading, error } = useSelector((state) => state.data)
    
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(loadUsersStart())
    // },[])


  return (
    <div>
        
        {users && users.map((item, index) => (
            <div key={index}>
                <div>
                    <div>
                        {index + 1}
                    </div>
                    <div>
                        {item.name}
                    </div>
                    <div>
                        {item.email}
                    </div>
                    <div>
                        {item.phone}
                    </div>
                    <div>
                        {item.address}
                    </div>
                    <div>
                        <h1>Actions</h1>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Table


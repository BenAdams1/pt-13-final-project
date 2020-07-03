import React from 'react'

const Form = () => {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />
            <label htmlFor="cohort">Cohort</label>
            <input type="number" name="cohort" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
            <input type="submit"/>
     
        </form>
    )
}

export default Form

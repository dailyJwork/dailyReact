export const StatiscitsItem = ({data: { title, total }}) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{total}</p>
        </>
    )
}   
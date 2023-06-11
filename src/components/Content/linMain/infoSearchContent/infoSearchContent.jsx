import {useLocation} from 'react-router-dom';
function infoSearchContent() {
    const location = useLocation()

    return (
        <>
        <h1>infoSearchContent</h1>
        <h2>{location.state.data}</h2>
        </>
    )
}

export default infoSearchContent
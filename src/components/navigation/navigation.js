import './navigation.css'
// import logoMd from '././public/img/rsl-logo-md.png'

function Navigation(){
    return(
        <div className='container'>
            <div className='container-img'>
                {/* <img src={logoMd} /> */}
                <p>logo</p>
                <button onClick={() => toggle()}>click me</button>
            </div>
            <div className='container-list'>
                <ul id='list'>
                    <li>profile</li>
                    <li>projects</li>
                    <li>tools</li>
                    <li>contact</li>
                </ul>
            </div>
        </div>
    )
}

const toggle = () => {
    document.getElementById('list').classList.toggle('d-none')
}

export default Navigation
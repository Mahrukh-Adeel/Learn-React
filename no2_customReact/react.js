function renderE(reactE, container){
    // const domE = document.createElement
    // (reactE.type)
    // domE.innerHTML= reactE.childern
    // domE.setAttribute('href',reactE.props.href)
    // domE.setAttribute('target', reactE.props.target)
    // container.appendChild(domE)
    const domE = document.createElement(reactE.type)
    domE.innerHTML= reactE.childern
    for(const prop in reactE.props){
        if(prop == childern) continue;
        domE.setAttribute(prop, reactE.props[prop])
    }
    container.appendChild(domE)
}
const reactE= {
    type: 'a',
    props:{
        href: 'google.com',
        target:  '_blank',
    },
    childern: 'Clicke me '
}
const main = document.querySelector("#root")
renderE(reactE, main)
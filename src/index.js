import _ from 'lodash';
import printMe from './print.js'
import './style.css'
import { cube } from './math.js'

if(process.env.NODE_ENV !== 'production'){
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('pre');

    // Lodash, now imported by this script
    element.innerHTML = [
        'hello webpack!',
        '5cubed ' + cube(5)
    ].join('\n\n')

    return element;
}
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

//  if (module.hot) {
//    module.hot.accept('./print.js', function() {
//      console.log('Accepting the updated printMe module!');
//      printMe();
//    })
//  }
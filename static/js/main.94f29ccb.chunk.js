(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,o){e.exports=o(28)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},,,function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(10),d=o.n(l),c=(o(19),o(6)),r=o(1),i=o(2),s=o(4),u=o(3),m=o(5),h=(o(20),function(e){var t=e.todo,o=e.deleteTodo,n=e.toggleTodoCompleted;return a.a.createElement("div",null,a.a.createElement("input",{className:"todo-checkbox",type:"checkbox",id:"item_".concat(t.id),onChange:function(){return n(t.id)}}),a.a.createElement("label",{htmlFor:"item_".concat(t.id)}),a.a.createElement("span",{className:"todo-text"},t.title),a.a.createElement("span",{className:"delete",onClick:o.bind(void 0,t.id)}))}),p=(o(21),function(){return a.a.createElement("div",null,a.a.createElement("h2",{className:"todo-title"}," ",["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date).getDay()]," ",a.a.createElement("br",null)," ",function(){var e=new Date,t=e.getDate(),o=e.getMonth()+1;return t<10&&(t="0"+t),o<10&&(o="0"+o),o+"-"+t+"-"+e.getFullYear()}()," "))}),g=o(11),f=o.n(g),v=(o(22),function(e){var t=e.handleChange,o=e.todo,n=e.addTodo;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:n},a.a.createElement("input",{type:"text",value:o,placeholder:"Take the garbage out",onChange:t}),a.a.createElement("div",{className:f()("btn btn-add",{active:o}),onClick:n},"+")))}),T=function(e){var t=e.todo,o=e.deleteTodo,n=e.toggleTodoUnCompleted;return a.a.createElement("div",null,a.a.createElement("input",{className:"todo-checkbox",type:"checkbox",id:"item_".concat(t.id),checked:!0,onChange:function(){return n(t.id)}}),a.a.createElement("label",{htmlFor:"item_".concat(t.id)}),a.a.createElement("span",{className:"todo-text"},t.title),a.a.createElement("span",{className:"delete",onClick:o.bind(void 0,t.id)}))},b=(o(23),o(13)),E=(o(24),function(e){var t=e.children,o=Object(b.a)(e,["children"]);return a.a.createElement("div",Object.assign({className:"btn btn-secondary"},o),t)}),C=function(e){function t(){var e,o;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={showCompleted:!1},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.todos,n=t.completedTodos,l=t.handleChange,d=t.todo,c=t.addTodo,r=t.deleteTodo,i=t.toggleTodoCompleted,s=t.toggleTodoUnCompleted,u=t.clearAll,m=t.percentage;return a.a.createElement("div",{className:"todo-wrapper"},a.a.createElement(p,null),a.a.createElement(v,{handleChange:l,todo:d,addTodo:c}),o&&o.length>0?a.a.createElement("p",{className:"status busy"},"You have ",o.length," pending todo item",o.length>1?a.a.createElement("span",null,"s"):""):null,o.length>0?a.a.createElement("ul",{className:"todo-list"},o.map((function(e,t){return a.a.createElement("li",{key:e.id},a.a.createElement(h,{todo:e,index:t,deleteTodo:r,toggleTodoCompleted:i}))}))):a.a.createElement("p",{className:"status free"},a.a.createElement("img",{src:"images/beer_celebration.svg",alt:"celebration"}),"Time to chill! You have no todos."),n&&n.length>0&&this.state.showCompleted?a.a.createElement("p",{className:"status busy"},"You have ",Math.round(m),"% completed item",n.length>1?a.a.createElement("span",null,"s"):""):null,n.length>0&&this.state.showCompleted?a.a.createElement("ul",{className:"todo-list archived"},n.map((function(e,t){return a.a.createElement("li",{key:e.id},a.a.createElement(T,{todo:e,deleteTodo:r,index:t,toggleTodoUnCompleted:s}))}))):null,a.a.createElement("div",{className:"control-buttons"},n.length>0?a.a.createElement(E,{onClick:function(){return e.setState((function(e){return{showCompleted:!e.showCompleted}}))}},this.state.showCompleted&&0!==n.length?"Hide Completed":"Show Completed"):null,o.length>0||n.length>0?a.a.createElement(E,{onClick:u},"Clear All"):""))}}]),t}(n.Component),y=o(12),N=o.n(y),S=(o(27),function(e){function t(){var e,o;Object(r.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={todos:[],completedTodos:[],todo:"",percentage:0},o.handleChange=function(e){e.preventDefault(),o.setState({todo:e.target.value})},o.addTodo=function(e){e.preventDefault();var t=o.state,n=t.todos,a=t.todo,l=n.filter((function(e){return isNaN(e)?e.title.toUpperCase()===a.toUpperCase():e===a}));if(!a||0!==l.length)return!1;var d={id:N()(),title:a,completed:!1};o.setState((function(){return{todos:[].concat(Object(c.a)(n),[d]),todo:""}}),(function(){var e=o.handlePercentage();o.setState({percentage:e})}))},o.deleteTodo=function(e){var t=o.state,n=t.todos,a=t.completedTodos;o.setState((function(){return{todos:Object(c.a)(n.filter((function(t){return t.id!==e}))),completedTodos:Object(c.a)(a.filter((function(t){return t.id!==e})))}}),(function(){var e=o.handlePercentage();o.setState({precentage:e})}))},o.clearAll=function(){o.setState({todos:[],completedTodos:[]})},o.toggleTodoCompleted=function(e){o.setState((function(t){var o=t.todos,n=t.completedTodos;return{todos:o.filter((function(t){return t.id!==e})),completedTodos:n.concat(o.filter((function(t){return t.id===e})))}}))},o.toggleTodoUnCompleted=function(e){o.setState((function(t){var o=t.todos,n=t.completedTodos;return{todos:o.concat(n.filter((function(t){return t.id===e}))),completedTodos:n.filter((function(t){return t.id!==e}))}}))},o.handlePercentage=function(){var e=o.state,t=e.todos,n=e.completedTodos,a=Number(t.length),l=Number(n.length);return 100*l/Number(a+l)},o}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("todos"),t=JSON.parse(e);t&&this.setState({todos:t});var o=localStorage.getItem("completedTodos"),n=JSON.parse(o);n&&this.setState({completedTodos:n})}catch(a){console.log(a)}}},{key:"componentDidUpdate",value:function(e,t){var o=this.state,n=o.todos,a=o.completedTodos;if(t.todos.length!==n.length){var l=JSON.stringify(n);localStorage.setItem("todos",l)}if(t.completedTodos.length!==a.length){var d=JSON.stringify(a);localStorage.setItem("completedTodos",d);var c=this.handlePercentage();this.setState({percentage:c})}}},{key:"render",value:function(){var e=this.state,t=e.todos,o=e.todo,n=e.completedTodos,l=e.percentage;return a.a.createElement("div",null,a.a.createElement("h1",null,"Daily To-Do list manager"),a.a.createElement(C,{todos:t,completedTodos:n,handleChange:this.handleChange,todo:o,addTodo:this.addTodo,deleteTodo:this.deleteTodo,clearAll:this.clearAll,toggleTodoCompleted:this.toggleTodoCompleted,toggleTodoUnCompleted:this.toggleTodoUnCompleted,percentage:l}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.94f29ccb.chunk.js.map
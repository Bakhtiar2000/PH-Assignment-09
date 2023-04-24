import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <h3>1. When do we use Context API?</h3>
            <p>= Context API is used in React applications to manage state that needs to be accessed by multiple components in a tree hierarchy. It helps to avoid prop drilling (manual process of passing down props through multiple levels of components). Context API allows you to create a global state that can be accessed by any component in the application without having to pass it down manually.</p>

            <h3>2. What is custom hook?</h3>
            <p>= A custom hook is a function in React that allows you to reuse stateful logic across multiple components. It's a way to encapsulate common stateful logic into a reusable piece of code that can be shared between components. Custom hooks follow a specific naming convention, where the name starts with "use", which indicates to React that it's a hook and can be used in functional components.</p>

            <h3>3. What is the use of useRef and useMemo?</h3>
            <p>= useRef is used to create a mutable reference that can be used to store a value between renders. It's commonly used to reference DOM elements or to store mutable values that don't trigger a re-render when they change. On the other hand, useMemo is used to memoize a value, which means it caches the value and only recalculates it when the dependencies change. It's commonly used to avoid unnecessary calculations or expensive operations.
            </p>
        </div>
    );
};

export default Blog;
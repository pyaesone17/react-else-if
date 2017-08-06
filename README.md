# React Condition
React Conditional Renderer Component that allows you to write jsx like a template engine. It will be helpful for 
developer who comes from backend environment.

# Installation
npm install react-else-if
yarn add react-else-if

# Usage 
It allows u to render everything like a template engine like this
 
```jsx
  import Condition,{If, Else, ElseIf} from 'react-else-if';
  
  <Condition>
    <If is={false}>
        If condition                       
    </If>
    <Else>
        Else Condition
    </Else>
  </Condition>
``` 

It also support for ElseIf block to make ur life more easier.

```jsx
  import Condition,{If, Else, ElseIf} from 'react-else-if';
  
  <Condition>
    <If is={false}>
        If condition
        <Condition>
            <If is={false}>
                Nested If condition
            </If>
            <Else>
                Nested Else Condition
            </Else>
        </Condition>                        
    </If>
    <ElseIf is={false}>
        Else If condition
    </ElseIf>
    <Else>
        Else Condition
    </Else>
  </Condition>
```

# Note

Since javascript allow you more control, you should still use javascript for render you views. 
Nothing more, it is just my private component, that i keep using in my project and I want to share.



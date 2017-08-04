import React, { Component } from 'react';
import Condition from '../src/Condition';
import If from '../src/If';
import Else from '../src/Else';
import ElseIf from '../src/ElseIf';

export default class Demo extends Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { deviceAction } from './jsx/store/action/app';
import { useWindowDimension } from './jsx/util/windowDimension';
import { AddStudent } from './jsx/component/addStudent';

export default function App() {

    const dispatch = useDispatch();

    const { height, width } = useWindowDimension();

    const { deviceState } = useSelector(state => state.app);
    const { device } = deviceState;

    useEffect(() => {
        dispatch(deviceAction.setDevice({ height, width }));
    }, []);

    return (
        <>
            {device && device !== null ?
                <>
                    {{
                        'phone': <p>Phone screen resolution is not yet supported</p>,
                        'tablet': <p>Tablet screen resolution is not yet supported</p>,
                        'monitor': <AddStudent />,
                    }[device]}
                </>
                :
                <p>failed to establish device, it may not be supported.</p>
            }
        </>
    )
}
export const deviceAction = {
    setDevice,
};

function setDevice(value) {
    return dispatch => {
        const { height, width } = value;
        let device, orientation;

        if (width > height) { orientation = 'landscape'; }
        else { orientation = 'portrait'; }

        if (width < 600 || width > 600 && height < 415) {
            device = 'phone';
        }
        else if (width > 600 && width < 1200) {
            device = 'tablet'; 
        }
        else {
            device = 'monitor';
        }

        dispatch({ type: 'setDevice', device, orientation });
    };
};
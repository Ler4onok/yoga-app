import {useCallback, useState} from 'react';
import axios from 'axios';

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = (url, method = 'GET', body) => {
        setLoading(true);
        try {
            switch (method) {
                case 'GET':
                    axios.get(url).then(response => {
                        return response;
                    });
                    break;
                case 'POST':
                    // TOASK: why response => return response returned undefined in render? 
                    return axios.post(url, body)
                
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error)
        }
    }

    return { request, loading, error }
}


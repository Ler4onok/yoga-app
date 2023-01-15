import {useState} from 'react';
// libs
import axios from 'axios';

// todo: add comments
export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = (url, method = 'GET', body) => {
        setLoading(true);
        try {
            switch (method) {
                case 'GET':
                    return axios.get(url);
                case 'POST':
                    return axios.post(url, body);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        };
    };

    return {request, loading, error};
};

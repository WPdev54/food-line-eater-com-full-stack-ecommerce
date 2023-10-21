import React, { useContext } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai'
import { AuthContext } from './AuthProviders';

const GoogleProvider = () => {
    const { authWithGoogle } = useContext(AuthContext)
    const handleGoogleLogin = () => {
        authWithGoogle()
            .then((res) => {
                const loggedUser = res.user;
                console.log(loggedUser);

                const savedUser = { email: loggedUser.email, name:loggedUser.displayName }

                fetch('http://localhost:5000/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            navigate('/')
                            Swal.fire(
                                'Register And Login Sucessful',
                                'Order Foods'
                            )
                        }
                    })

            })
            .catch((e) => {
                console.log(e);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>
                <AiFillGoogleCircle
                    size={42}
                    className="mx-4 text-amber-900 mt-3"
                />
            </button>
        </div>
    );
};

export default GoogleProvider;
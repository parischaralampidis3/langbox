import React from 'react'

function MobileMenu() {
    const navigation = [
        { link: '#', text: 'Link 1' },
        { link: '#', text: 'Link 2' },
        { link: '#', text: 'Link 3' },
        { link: '/about', text: 'About' },
    ];

    return (
        <div className="bg-blue-200 py-6 md:hidden">
            <div className="container mx-auto">
                <ul className='block flex flex-col text-center md:hidden '>
                    {navigation.map((nav) => (
                        <li className='my-4 mx-8 font-medium text-gray-600  hover: text-gray-900 text-lg' key={nav.text}>
                            <a href={nav.link}>{nav.text}</a>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="flex flex-col justify-center my-8">
                    <button className="bg-blue-600 font-medium text-white rounded-md py-2 mx-auto w-1/3 my-4">
                        <a href="./register"> Register</a>
                    </button>

                    <button className="bg-blue-600 font-medium text-white rounded-md py-2 mx-auto w-1/3 px-2">
                        <a href="./register">Login</a>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MobileMenu;
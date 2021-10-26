import React from "react";
import Logo from "./resources/images/logo.png"
import Menu from "./Menu";

export default class Header extends React.Component<any> {
    render() {

        return <div>
            <nav className="flex items-center flex-wrap bg-teal-500 p-6 bg-blue-400">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Fluitende Fietser</span>
                </div>
                <div className="mr-6">
                    <img className="h-20" src={Logo} alt="logo"/>
                </div>


                <div className="p-6 ml-100">
                    <div className="bg-white flex items-center rounded-full shadow-xl">
                        <input className="h-6 rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />

                            <div className="p-6">
                                <button className="h-6 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400
                                                    focus:outline-none flex items-center justify-center">
                                    icon
                                </button>
                            </div>
                    </div>
                </div>
            </nav>

            <Menu SelectedItem={this.props.SelectedItem}/>
        </div>;
    }
}

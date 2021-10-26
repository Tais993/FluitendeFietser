import React from "react";
import "./index.css";

export default class Menu extends React.Component<any> {

    public createItem(name: string) {
        // TODO: how to compare strings in TS?
        const selectedItem = this.props.SelectedItem;

        if (name === selectedItem) {
            return this.createSelectedItem(name);
        } else {
            return this.createUnselectedItem(name);
        }
    }

    public createSelectedItem(name: string) {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        return <a href="#"
                  className="selectedMenuItem">
            {name}
        </a>
    }

    public createUnselectedItem(name: string) {
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        return <a href="#"
                  className="unselectedMenuItem">
            {name}
        </a>
    }


    render() {
        return <div
            className="p-2 w-full items-center block flex-grow lg:flex lg:items-center h-full lg:w-auto bg-blue-900">
            <div className="text-sm lg:flex-grow">
                {this.createItem("Home")}
                {this.createItem("Fietsen")}
                {this.createItem("Contact")}
                {this.createItem("Openingstijden")}
                {this.createItem("Over ons")}
            </div>
        </div>
    }
}

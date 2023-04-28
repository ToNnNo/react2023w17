import React from "react";
import "./DataList.css";

export default function DataList({ items = [] }) {

    return (
        <dl>
            { items.map( (item) => (
                <React.Fragment key={item.id}>
                    <dt>{ item.title }</dt>
                    <dd>{ item.description }</dd>
                </React.Fragment>
            )) }
        </dl>
    )
}
import React from "react";

export default function Section({ title, subtitle, id, sectionClass}) {
    return (
        <div className={sectionClass}>
            <div id={id}>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}
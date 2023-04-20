import React, { FC, PropsWithChildren } from 'react';
import styles from "./ClearSelectComponent.module.css";

export interface ClearSelectProps {

}

export const ClearSelectComponent: FC<PropsWithChildren<ClearSelectProps>> = ({ children, ...props }) => {
    return (
        <div>
            <input type="text" list="" />
            <datalist id="cities">

            </datalist>
        </div>
    );
};

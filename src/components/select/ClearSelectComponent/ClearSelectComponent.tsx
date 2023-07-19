import { FC } from 'react';
import City from "../../../models/City";
import styles from "./ClearSelectComponent.module.css";
import circleCheck from "../../../assets/icons/circle-check-regular.svg";

interface ClearSelectProps {
    valueInput: string;
    cities: City[];
    onChangeInput: (input: string) => void;
    onClickCity: (city: string) => void;
}

const ClearSelectComponent: FC<ClearSelectProps> = ({ ...props }) => {
    function CheckCity() {
        let isInclude = false;

        for (let i = 0; i < props.cities.length; i++)
            if (props.cities[i].name === props.valueInput)
                isInclude = true;

        if (isInclude) {
            props.onClickCity(props.valueInput);
            props.onChangeInput("");
        }
    }

    return (
        <div className={styles.Container}>
            <input
                type="text"
                list="cities"
                className={styles.ClearSelect}
                value={props.valueInput}
                onChange={(e) => props.onChangeInput(e.target.value)}
            />
            <datalist id="cities">
                {props.cities.map((c, index) =>
                    <option
                        key={index}
                        className={styles.ClearSelectOption} >
                        {c.name}
                    </option>)}
            </datalist>

            <button
                onClick={() => CheckCity()}
                style={{ color: "white" }}
            >
                <img src={circleCheck} className={styles.CheckImg} alt="check" />
            </button>
        </div>
    );
};

export default ClearSelectComponent;

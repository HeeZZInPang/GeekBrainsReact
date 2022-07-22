import { useDispatch, useSelector } from "react-redux";
import { toggleCheckBox } from "../../store/profile/actions";
import { Button } from '@mui/material';

export const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state)

    const handleClick = () => dispatch(toggleCheckBox);

    return (
        <div>
            <h3>Profile</h3>
            <Button onClick={handleClick} variant="outlined">Change</Button>
            {state.showName && <span>{state.name}</span>}
        </div>
    );
};
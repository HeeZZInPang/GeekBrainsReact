import { useDispatch, useSelector } from "react-redux";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { setName, toggleCheckBox } from "../../store/profile/actions";
import { Form } from "../../components/Form/Form";
import { Button } from '@mui/material';

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);

    const handleClick = () => {
        dispatch(toggleCheckBox);
    };

    const handleSubmit = (text) => {
        dispatch(setName(text));
    };

    return (
        <div>
            <h3>Profile</h3>
            <Button onClick={handleClick} variant="outlined">Change</Button>
            {showName && <span>{name}</span>}
            <Form onSubmit={handleSubmit} />
        </div>
    );
};
import { styled } from '@mui/material/styles';
import { Colors } from '../colors';
import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { useCategoriesContext } from '../ContexProvider';

const CustomFormControl = styled(FormControl)({
    '& .MuiSelect-select': {
        backgroundColor: Colors.blacklight,
        color: Colors.graylighter,
        borderRadius: '5px',
        '&::after': {
            borderBottomLeftRadius: '5px',
            borderBottomRightRadius: '5px',
            borderBottom: `5px solid ${Colors.primary}`,
        },
    }
});

const CustomInputLabel = styled(InputLabel)({
    color: Colors.graylighter,
    '&.MuiInputLabel-shrink': {
        color: Colors.graylighter,
    },
    '&.MuiInputLabel-root': {
        color: Colors.graylighter,
    },
});

const CustomMenuItem = styled(MenuItem)({
    color: Colors.graylighter,
    '&:hover':{
        backgroundColor:Colors.primary
    }
});

const MySelect = ({ id, label, value, setValue, required }) => {
    const categories = useCategoriesContext()

    return (
        <CustomFormControl fullWidth variant="filled">
            <CustomInputLabel htmlFor={id} shrink={Boolean(value)}>
                {label}
            </CustomInputLabel>
            <Select
                value={value}
                id={id}
                onChange={(e) => setValue(e.target.value)}
                required={required ? true : false}
                inputProps={{
                    style: { color: 'white' },
                }}
                MenuProps={{
                    PaperProps: {
                        style: { backgroundColor: Colors.blacklight },
                    },
                }}
            >
                {
                    categories.map((category,index) => {
                        return(
                            <CustomMenuItem key={index} value={category.value}>
                                {category.label}
                            </CustomMenuItem>
                        )
                    })
                }
            </Select>
        </CustomFormControl>
    );
};

export default MySelect;

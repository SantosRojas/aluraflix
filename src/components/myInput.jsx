import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { Colors } from '../colors';

const CustomTextField = styled(TextField)({
  '& .MuiFilledInput-root': {
    backgroundColor: Colors.blacklight,
    color: Colors.graylighter,
    borderRadius: '5px', // Ajusta el valor según tus preferencias
    '&::after': {
      borderBottomLeftRadius: '5px', // Ajusta el valor según tus preferencias
      borderBottomRightRadius: '5px', // Ajusta el valor según tus preferencias
      borderBottom: `5px solid ${Colors.primary}`
    },
  },
  '& label, label.Mui-focused': {
    color: Colors.graylighter,
  },
});

const MyTextField = ({ id, label, value, setValue, type="text",required}) => {
  return (
    <CustomTextField
      type={type ? type:"text"}
      fullWidth
      value={value}
      id={id}
      variant="filled"
      label={label}
      onChange={(e) => setValue(e.target.value)}
      required ={required ? true:false}
    />
  );
};

export default MyTextField;

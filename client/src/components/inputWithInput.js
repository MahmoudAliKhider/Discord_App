import React from 'react'
import { styled } from "@mui/system"

const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop:"2%",
})
const Lable = styled('p')({
    color: "#365486",
    textTransform: 'uppercase',
    fontWeight: "500",
    fontSize: "15px"
})
const Input = styled('input')({
    flexGrow: 1,
    height: "40px",
    border: "1px solid black",
    borderRadius: "6px",
    color: "#b9bbbe",
    background: "#092635",
    margin: 0,
    fontSize: "16px",
    padding: "0 5px"
})
const InputWithInput = (props) => {
    const { value, setValue, lable, type, placeholder } = props;

    const handelValueChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Wrapper>
            <Lable>{lable}</Lable>
            <Input
                value={value}
                onChange={handelValueChange}
                type={type}
                placeholder={placeholder}
            ></Input>
        </Wrapper>
    )
}

export default InputWithInput
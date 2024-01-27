import React from 'react'
import { styled } from "@mui/system"

const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop:"1px",
})
const Lable = styled('p')({
    color: "#365486",
    textTransform: 'uppercase',
    fontWeight: "600",
    fontSize: "13px"
})
const Input = styled('input')({
    flexGrow: 1,
    height: "40px",
    border: "1px solid black",
    borderRadius: "6px",
    color: "#092635",
    background: "#fff",
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
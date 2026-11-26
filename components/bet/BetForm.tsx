"use client";

import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextField,
    Select,
    ListBox,
    NumberField
} from "@heroui/react";
import { Handshake, X,  } from "lucide-react";

const BetForm = () => {
    const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: Record<string, string> = {};

        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        alert("Form submitted successfully!");
    };

    return (
        <Form className="w-full " onSubmit={onSubmit}>
            <Fieldset>
                {/* <Fieldset.Legend>Profile Settings</Fieldset.Legend>
        <Description>Update your profile information.</Description> */}
                <FieldGroup>
                    <TextField
                        name="title"

                    >
                        <Label className="font-semibold text-white">Rivalry title</Label>
                        <Input placeholder="e.g. Chelsea will humble United at the Bridge" className={"ring-success pl-4 h-12 text-white rounded-lg bg-transparent border border-gray-400 focus:border-none"} />
                        <FieldError />
                    </TextField>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Select placeholder="Select one" isRequired validate={(value) => {
                            if (!value) {
                                return "Title must be at least 3 characters";
                            }

                            return null;
                        }}>
                            <Label className="font-semibold text-white">Select League</Label>
                            <Select.Trigger className={"ring-success pl-4 h-12 pt-3 rounded-lg bg-transparent border border-gray-400 focus:border-success"} >
                                <Select.Value className={"text-white"} />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="florida" textValue="Florida">
                                        Florida
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="delaware" textValue="Delaware">
                                        Delaware
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="california" textValue="California">
                                        California
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="texas" textValue="Texas">
                                        Texas
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="new-york" textValue="New York">
                                        New York
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="washington" textValue="Washington">
                                        Washington
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <Select placeholder="Select one" isRequired>
                            <Label className="font-semibold text-white">Select match</Label>
                            <Select.Trigger className={"ring-success pl-4 h-12 pt-3 rounded-lg bg-transparent border border-gray-400 focus:border-success"} >
                                <Select.Value className={"text-white"} />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="florida" textValue="Florida">
                                        Florida
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="delaware" textValue="Delaware">
                                        Delaware
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="california" textValue="California">
                                        California
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="texas" textValue="Texas">
                                        Texas
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="new-york" textValue="New York">
                                        New York
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="washington" textValue="Washington">
                                        Washington
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>
                    
                        <Select placeholder="Select one" isRequired >
                            <Label className="font-semibold text-white">Your team (you back them)</Label>
                            <Select.Trigger className={"ring-success pl-4 h-12 pt-3 rounded-lg bg-transparent border border-gray-400 focus:border-success"} >
                                <Select.Value className={"text-white"} />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="florida" textValue="Florida">
                                        Florida
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="delaware" textValue="Delaware">
                                        Delaware
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="california" textValue="California">
                                        California
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="texas" textValue="Texas">
                                        Texas
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="new-york" textValue="New York">
                                        New York
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="washington" textValue="Washington">
                                        Washington
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <Select placeholder="Select one" isRequired >
                            <Label className="font-semibold text-white">Your bet</Label>
                            <Select.Trigger className={"ring-success pl-4 h-12 pt-3 rounded-lg bg-transparent border border-gray-400 focus:border-success"} >
                                <Select.Value className={"text-white"} />
                                <Select.Indicator />
                            </Select.Trigger>
                            <Select.Popover>
                                <ListBox>
                                    <ListBox.Item id="win" textValue="Win">
                                        Win
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="lose" textValue="Lose">
                                        Lose
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="draw" textValue="Draw">
                                        Draw
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="win_fh" textValue="Win_FH">
                                        Win First half
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="win_sh" textValue="Win_SH">
                                        Win Second half
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="lose_fh" textValue="Lose_FH">
                                        Lose First half
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                    <ListBox.Item id="lose_sh" textValue="Lose_SH">
                                        Lose Second half
                                        <ListBox.ItemIndicator />
                                    </ListBox.Item>
                                   
                                </ListBox>
                            </Select.Popover>
                        </Select>

                        <NumberField
                            className="w-full "
                            defaultValue={500}
                            minValue={200}
                            name="stake"
                            isRequired
                            validate={(value) => {
                                if (!value) {
                                    return "Minimum amount is ₦200";
                                }

                                return null;
                            }}
                        >
                            <Label className="font-semibold text-white">Your opening stake (₦)</Label>
                            <NumberField.Group className={"ring-success h-12 text-white rounded-lg bg-transparent border border-gray-400 w-full focus:border-none"}>
                                <NumberField.Input />
                            </NumberField.Group>
                            <Description>Your first bet on your team. Opposing fans must match or beat it.</Description>
                            <FieldError />
                        </NumberField>
                    </div>

                </FieldGroup>

                <Fieldset.Actions>
                    <Button type="submit" className="bg-emerald-500 rounded-lg hover:bg-emerald-400 text-slate-950 font-semibold h-12 px-7 text-base">
                        <Handshake />
                       Open bet challenge
                    </Button>
                    <Button type="reset" className="bg-red-500 rounded-lg hover:bg-red-400 text-slate-950 font-semibold h-12 px-7 text-base">
                          <X />
                        Cancel
                    </Button>
                </Fieldset.Actions>
            </Fieldset>
        </Form>
    );
}

export default BetForm
import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Index = () => {
    return (
        <div className="p-10 typo add-task-component">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Type Todo"
                    value=""
                />
                <InputGroup.Append>
                    <Button variant="outline-secondary">ADD</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}
export default Index
import {Button, ButtonContainer} from "../components/buttons";
import {TextInput, Radio} from "../components/input";
import {Table, TableRow} from "../components/table";

function Components() {

    return (
        <>
            <h1>Components Section!</h1>
            <hr />

            <h2>ButtonContainer & Button</h2>
            <ButtonContainer>
                <Button color="green">Other Option</Button>
                <Button color="green">Billable</Button>
                <Button color="green">Start/Stop</Button>
            </ButtonContainer>
            <br />
            <ButtonContainer>
                <Button color="orange">Other Option</Button>
                <Button color="orange">Billable</Button>
                <Button color="orange">Start/Stop</Button>
            </ButtonContainer>
            <br />
            <ButtonContainer>
                <Button color="red">Other Option</Button>
                <Button color="red">Billable</Button>
                <Button color="red">Start/Stop</Button>
            </ButtonContainer>
            <br />
            <ButtonContainer>
                <Button>Other Option</Button>
                <Button>Billable</Button>
                <Button>Start/Stop</Button>
            </ButtonContainer>
            <hr />
            <h2>TextInput</h2>
            <TextInput placeholder={"enter your social insurance number"} />
            <h2>Radio</h2>
            <Radio name="a" />
            <Radio name="a" />
            <Radio name="a" />
			<h2>Table</h2>
			<Table>
				<TableRow header bold>
					<p>Title</p>
					<p className="collapsible">Description</p>
					<p>Description-2</p>
				</TableRow>
				<TableRow href="#">
					<p>Name</p>
					<p className="collapsible">Description</p>
					<p>Description-2</p>
				</TableRow>
				<TableRow href="#">
					<p>Name</p>
					<p className="collapsible">Description</p>
					<p>Description-2</p>
				</TableRow>

			</Table>
        </>
    );
}

export default Components;

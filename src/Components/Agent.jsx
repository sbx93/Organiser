import Card from "./Card.jsx";

function Agent() {
    return (
        <div className="flex gap-2 overflow-x-auto	">
            <h1 className="font-bold">Agent Name</h1>
            <Card stage={"Welcome Email"} />
            <Card stage={"Intro Call"} />
            <Card stage={"Data"} />
            <Card stage={"Tenants, Beneficiaries, Properties"} />
            <Card stage={"Invoices and Payments"} />
            <Card stage={"Tens, Bens, Props"} />
            <Card stage={"Tens, Bens, Props"} />
            <Card stage={"Tens, Bens, Props"} />

        </div>
    );
}

export default Agent;

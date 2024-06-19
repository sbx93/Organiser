
function Navbar() {
        return (
            <div className="flex mb-10">
                <h1 className="font-bold text-3xl">Organiser</h1>
                <ul className=" flex gap-3 ml-auto p-1 mr-2 mt-1">
                    <li>Export</li>
                    <li>Agents</li>
                    <li>Account</li>
                </ul>
            </div>
        );
}

export default Navbar;

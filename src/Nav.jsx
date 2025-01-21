function Nav({ setNewTask, isPersonalClicked, isProfClicked, setPersonalIsClicked, setProfIsClicked }) {
    const tab1Style = {
        color: isPersonalClicked ? "black" : "grey",
        borderBottom: isPersonalClicked ? "3px solid rgba(217, 131, 38, 1)" : "none",
        padding: "5px",
        width: "50%",
        textAlign: "center",
        fontWeight: isPersonalClicked ? "bold" : "normal",
        cursor: "pointer",
        transition: "all 1s"

    }
    const tab2Style = {
        color: isProfClicked ? "black" : "grey",
        borderBottom: isProfClicked ? "3px solid rgba(217, 131, 38, 1)" : "none",
        padding: "5px",
        width: "50%",
        textAlign: "center",
        fontWeight: isProfClicked ? "bold" : "normal",
        cursor: "pointer",
        transition: "all 1s"
    }
    const togglePersonalStyle = () => {
        setPersonalIsClicked(!isPersonalClicked ? !isPersonalClicked : isPersonalClicked);
        setProfIsClicked(!isProfClicked ? isProfClicked : !isProfClicked);
        setNewTask("");
    }
    const toggleProfStyle = () => {
        setProfIsClicked(!isProfClicked ? !isProfClicked : isProfClicked);
        setPersonalIsClicked(!isPersonalClicked ? isPersonalClicked : !isPersonalClicked);
        setNewTask("");

    }
    return (
        <div className="nav">
            <div style={tab1Style} onClick={() => togglePersonalStyle()}>Personal</div>
            <div style={tab2Style} onClick={() => toggleProfStyle()}>Professional</div>
        </div>
    );
}

export default Nav
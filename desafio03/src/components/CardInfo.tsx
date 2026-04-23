interface ICardInfo {
    mainContent: string;
    content: string;
}

const CardInfo = ({ mainContent, content }: ICardInfo) => {
    return (
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", minHeight: "120px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                { mainContent }
            </h2>
            <p style={{ fontSize: "1.1rem" }}>
                { content }
            </p>
        </div>
    )
}

export default CardInfo;
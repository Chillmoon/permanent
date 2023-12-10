import useStyles from "./styles";

interface TelegramChatProps {
  rate: string;
}

const TelegramChat = ({ rate }: TelegramChatProps) => {
  const classes = useStyles();
  const link =
    rate === "Rate1"
      ? "https://t.me/+zqTBaETkQ902YmZi"
      : "https://t.me/+M-1MSP3gYVE5YTgy";
  return (
    <div className={classes.wrapper}>
      <a href={link} target="_blank">
        <img src="../../assets/telegramChat.svg" />
      </a>
    </div>
  );
};

export default TelegramChat;

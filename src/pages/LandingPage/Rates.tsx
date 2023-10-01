import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslation } from "react-i18next";

import useStyles from "./styles";

const Rates = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const rates = [
    {
      name: t("Самостійний"),
      spots: "∞",
      perks: [
        t("Повна програма навчання (120+ уроків у записі)"),
        t("Доступ до платформи та навчальних матеріалів на 6 місяців"),
        t("Матеріали та конспекти до кожного уроку"),
        t("Доступ до загального інформаційного чату"),
      ],
      disabledPerks: [
        t("Доступ до закритого ком’юніті з учнями потоку"),
        t(
          "Участь у 10-ти групових зумах з відповідями на запитання та розбір домашніх завдань"
        ),
        t("Додаткові войс-чати"),
        t("Перевірка домашніх завдань та зворотній зв’язок в груповому чаті"),
        t("Гарантія результату (при виконанні всіх рекомендацій)"),
        t("Сертифікат про проходження курсу"),
        t("Підтримка, поради та настанови в особистому чаті"),
        t(
          "Щотижневі особисті зуми зі мною з відповідями на питання та розбіром вашої ситуації. План навчання підлаштовується під ваш запит"
        ),
        t("Допомога у пошуку 1-го клієнта + ЧАТ ВАКАНСІЙ"),
      ],
      mainRate: false,
      basicCost: "13 999",
      discountPrice: "9 999",
    },
    {
      name: t("Груповий"),
      spots: "7",
      perks: [
        t("Повна програма навчання (120+ уроків у записі)"),
        t("Доступ до платформи та навчальних матеріалів на 6 місяців"),
        t("Матеріали та конспекти до кожного уроку"),
        t("Доступ до загального інформаційного чату"),
        t("Доступ до закритого ком’юніті з учнями потоку"),
        t(
          "Участь у 10-ти групових зумах з відповідями на запитання та розбір домашніх завдань"
        ),
        t("Додаткові войс-чати"),
        t("Перевірка домашніх завдань та зворотній зв’язок в груповому чаті"),
        t("Гарантія результату (при виконанні всіх рекомендацій)"),
        t("Сертифікат про проходження курсу"),
      ],
      disabledPerks: [
        t("Підтримка, поради та настанови в особистому чаті"),
        t(
          "Щотижневі особисті зуми зі мною з відповідями на питання та розбіром вашої ситуації. План навчання підлаштовується під ваш запит"
        ),
        t("Допомога у пошуку 1-го клієнта + ЧАТ ВАКАНСІЙ"),
      ],
      mainRate: true,
      basicCost: "17 999",
      discountPrice: "14 999",
    },
    {
      name: t("Індивідуальний"),
      spots: "3",
      perks: [
        t("Повна програма навчання (120+ уроків у записі)"),
        t("Доступ до платформи та навчальних матеріалів на 6 місяців"),
        t("Матеріали та конспекти до кожного уроку"),
        t("Доступ до загального інформаційного чату"),
        t("Доступ до закритого ком’юніті з учнями потоку"),
        t(
          "Участь у 10-ти групових зумах з відповідями на запитання та розбір домашніх завдань"
        ),
        t("Додаткові войс-чати"),
        t("Перевірка домашніх завдань та зворотній зв’язок в груповому чаті"),
        t("Гарантія результату (при виконанні всіх рекомендацій)"),
        t("Сертифікат про проходження курсу"),
        t("Підтримка, поради та настанови в особистому чаті"),
        t(
          "Щотижневі особисті зуми зі мною з відповідями на питання та розбіром вашої ситуації. План навчання підлаштовується під ваш запит"
        ),
        t("Допомога у пошуку 1-го клієнта + ЧАТ ВАКАНСІЙ"),
      ],
      mainRate: false,
      basicCost: "32 999",
      discountPrice: "24 999",
    },
  ];
  return (
    <>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        {rates.map((rate, index) => (
          <Grid
            key={index}
            item
            xs={12}
            lg={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxWidth="100vw"
            marginTop="50px"
          >
            <Card
              className={
                rate.mainRate
                  ? classes.ratesBlockCardMain
                  : classes.ratesBlockCard
              }
            >
              <CardHeader
                title={rate.name}
                className={
                  rate.mainRate
                    ? classes.ratesBlockcardTitleMain
                    : classes.ratesBlockcardTitle
                }
              />
              <CardContent className={classes.ratesBlockcardContent}>
                <div className={classes.spotsWrapper}>
                  {t("Місць")}:{" "}
                  <span
                    className={
                      rate.mainRate ? classes.spotsMain : classes.spots
                    }
                  >
                    {rate.spots}
                  </span>
                </div>
                <List>
                  {rate.perks.map((perk, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckIcon
                          sx={{ color: rate.mainRate ? "#FFF" : "#004AAD" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={perk} />
                    </ListItem>
                  ))}
                  {rate.disabledPerks?.map((perk, index) => (
                    <ListItem key={index}>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText
                        primary={perk}
                        className={
                          rate.mainRate
                            ? classes.disabledPerksMain
                            : classes.disabledPerks
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
              <div style={{ flexGrow: 1 }} />
              <Typography
                variant="h5"
                align="center"
                className={
                  rate.mainRate
                    ? classes.ratesBlockcardPriceMain
                    : classes.ratesBlockcardPrice
                }
              >
                <span>
                  <del>{rate.basicCost}₴</del>
                </span>
                <span>{rate.discountPrice}₴</span>
              </Typography>
              {/* <CardActions className={classes.ratesBlockcardButton}>
                <a
                  href="https://secure.wayforpay.com/button/b5a6a3d802fd7"
                  className={classes.payButton}
                >
                  {t("Купити з wayforpay")}
                </a>
                <a
                  href="https://pay.fondy.eu/s/t5TgF8fgf"
                  className={classes.payButton}
                >
                  {t("Купити з Fondy")}
                </a>
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Rates;

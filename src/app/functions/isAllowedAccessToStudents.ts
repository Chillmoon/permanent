const isAllowedAccessToStudents = (uid: string | undefined) => {
  return [
    "5iQjbhp2kBWDLCHqQ60JAy3VrvH3",
    "brUeLxaH76RoEkLlCI0BdhYeVZ92",
    "EtZEWX2iaHZXDNdiV4x0DYKPcKf1",
  ].includes(uid || "");
};

export default isAllowedAccessToStudents;

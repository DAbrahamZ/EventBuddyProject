import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 32,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    marginTop: 20,
    color: "#ff5b01",
    textAlign: "center",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },

  login_label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  login_input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 18,
    fontSize: 16,
    backgroundColor: "#ff5a013d",
    color: "#fff",
    width: "90%", 
    alignSelf: "center", 
},

  login_button: {
    backgroundColor: "#ff5b01",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 14,
    marginTop: 8,
  },
  login_buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },

  login_link: {
    color: "#fff",
    marginTop: 8,
    textAlign: "center",
    textDecorationLine: "underline",
    opacity: 0.85,
    fontSize: 15,
  },

  signup_container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  signup_label: {
    fontSize: 16,
    marginBottom: 6,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  signup_input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 18,
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.15)",
    color: "#fff",
    width: "90%",
    alignSelf: "center",
},
  signup_button: {
    backgroundColor: "#ff5b01",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 14,
    marginTop: 8,
  },
  signup_buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },

  list: { paddingBottom: 16 },
  card: {
    marginBottom: 16,
    backgroundColor: "rgba(255, 90, 1, 0.2)",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    padding: 8,
    width: 320,
    alignSelf: "center",
  },
  image: { width: "100%", height: 150, borderRadius: 8 },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 12, color: "#fff", alignSelf: "flex-end"},
  date: { color: "#fff", marginBottom: 5, alignSelf: "flex-end"},
  link: { color: "#ff5b01", marginBottom: 5, alignSelf: "flex-end"},
  description: { color: "#444", fontSize: 15, marginBottom: 4 },


  logout_button: {
    backgroundColor: "#ff5b01",
    padding: 12,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 10,
    marginTop: 4,
    width: 320,
    alignSelf: "center",
  },

  eventDescription: {
    fontSize: 16,
    color: "#fff",
    marginVertical: 12,
    textAlign: "left",
  },

  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -150,
    minHeight: "5%",
    background: "#f7f7f7",
  },

  loginHeader: {
    width: 480,
    height: 480,
    marginBottom: -50,
    borderRadius: 16,
  },

  center: { alignItems: "center", justifyContent: "center" },
});

export default styles;
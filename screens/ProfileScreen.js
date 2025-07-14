import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, TouchableOpacity, Alert, TextInput, Image, ActivityIndicator, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useAuth } from "../context/AuthContext";
import styles from "../styles/style";
import { database } from "../firebaseConfig";

const BACKGROUND_IMAGE = require("../assets/background.png");
const DEFAULT_AVATAR = require("../assets/default-avatar.png");

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState(null);
  const [saving, setSaving] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (!user) return;

    const unsubscribe = database
      .collection("users")
      .doc(user.uid)
      .onSnapshot(
        (doc) => {
          const data = doc.data();
          setProfile(data);
          setName(data?.name || "");
          if (data?.birthday) {
            setBirthday(data.birthday.toDate ? data.birthday.toDate() : new Date(data.birthday));
          } else {
            setBirthday(null);
          }
        },
        (error) => {
          Alert.alert("Error", "Could not load profile data.");
        }
      );

    return () => unsubscribe();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    try {
      await database.collection("users").doc(user.uid).update({
        name: name.trim(),
        birthday: birthday ? birthday : null,
      });
      setProfile((prev) => ({ ...prev, name: name.trim(), birthday: birthday }));
      Alert.alert("Success", "Profile updated successfully.");
    } catch (error) {
      Alert.alert("Error", "Failed to update profile.");
    }
    setSaving(false);
  };

  const onChangeDate = (event, selectedDate) => {
  setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setBirthday(selectedDate);
    }
  };

  if (!user) {
    return (
      <ImageBackground source={BACKGROUND_IMAGE} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.header}>You are not logged in.</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground source={BACKGROUND_IMAGE} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.header}>My profile</Text>

        <Image
          source={profile?.profileImage ? { uri: profile.profileImage } : DEFAULT_AVATAR}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 16,
            borderWidth: 2,
            borderColor: "#ff5b01",
          }}
        />

        <Text style={styles.login_label}>Name:</Text>
        <TextInput
          value={name}
          style={[styles.login_input, { marginBottom: 12 }]}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#fff"
        />

        <Text style={styles.login_label}>Email:</Text>
        <Text style={styles.login_input}>{user.email}</Text>

        <Text style={styles.login_label}>Birthday:</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={[styles.login_input, { paddingVertical: 12, justifyContent: "center" }]}
        >
        <Text style={{ color: birthday ? "#fff" : "#aaa" }}>
        {birthday ? birthday.toLocaleDateString() : "Select your birthday"}
        </Text>
        </TouchableOpacity>
        {showDatePicker && (
        <DateTimePicker
        value={birthday || new Date()}
        mode="date"
        display="default"
        onChange={onChangeDate}
        maximumDate={new Date()}
        />
      )}

        <Text style={styles.login_label}>
          Favorites: {profile?.favorites?.length ?? 0}
        </Text>
        <Text style={styles.login_label}>
          Participations: {profile?.participations?.length ?? 0}
        </Text>

        <View style={{ flexDirection: "row", gap: 12, alignItems: "center", marginTop: 120 }}>
          <TouchableOpacity
            style={[styles.logout_button, { width: 150, marginBottom: 12 }]}
            onPress={handleSave}
            disabled={saving}
          >
            {saving ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.login_buttonText}>Save changes</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.logout_button, { width: 150 }]}
            onPress={logout}
          >
            <Text style={styles.login_buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
"use client";

import { useState } from "react";
import { Settings, Users, CreditCard, GraduationCap, Shield, UserCog, Crown, Palette, RefreshCw, Save, Trash2, Download, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DataItem {
  id: string;
  name: string;
  status: "active" | "inactive";
  date: string;
}

const defaultArtsData: DataItem[] = [
  { id: "1", name: "Bharatanatyam", status: "active", date: "2024-01-15" },
  { id: "2", name: "Silambam", status: "active", date: "2024-01-15" },
  { id: "3", name: "Karate", status: "active", date: "2024-01-15" },
  { id: "4", name: "Chess", status: "active", date: "2024-01-15" },
  { id: "5", name: "Music", status: "active", date: "2024-01-15" },
  { id: "6", name: "Dance", status: "active", date: "2024-01-15" },
];

const defaultPaymentsData: DataItem[] = [
  { id: "1", name: "Monthly Subscription", status: "active", date: "2024-01-01" },
  { id: "2", name: "Annual Package", status: "active", date: "2024-01-01" },
  { id: "3", name: "Trial Classes", status: "active", date: "2024-01-01" },
];

const defaultAdminData: DataItem[] = [
  { id: "1", name: "Super Admin", status: "active", date: "2024-01-01" },
  { id: "2", name: "Content Manager", status: "active", date: "2024-01-01" },
];

const defaultManagersData: DataItem[] = [
  { id: "1", name: "Branch Manager - Chennai", status: "active", date: "2024-01-01" },
  { id: "2", name: "Branch Manager - Bangalore", status: "inactive", date: "2024-01-01" },
];

const defaultTeachersData: DataItem[] = [
  { id: "1", name: "Bharatanatyam Instructor", status: "active", date: "2024-01-01" },
  { id: "2", name: "Silambam Master", status: "active", date: "2024-01-01" },
  { id: "3", name: "Karate Sensei", status: "active", date: "2024-01-01" },
  { id: "4", name: "Chess Coach", status: "active", date: "2024-01-01" },
  { id: "5", name: "Music Teacher", status: "active", date: "2024-01-01" },
];

const defaultOwnerData: DataItem[] = [
  { id: "1", name: "Dragon School Founder", status: "active", date: "2024-01-01" },
];

type DataCategory = "arts" | "payments" | "admin" | "managers" | "teachers" | "owner";

export function SettingsPanel() {
  const [artsData, setArtsData] = useState<DataItem[]>(defaultArtsData);
  const [paymentsData, setPaymentsData] = useState<DataItem[]>(defaultPaymentsData);
  const [adminData, setAdminData] = useState<DataItem[]>(defaultAdminData);
  const [managersData, setManagersData] = useState<DataItem[]>(defaultManagersData);
  const [teachersData, setTeachersData] = useState<DataItem[]>(defaultTeachersData);
  const [ownerData, setOwnerData] = useState<DataItem[]>(defaultOwnerData);
  const [isRestoring, setIsRestoring] = useState(false);
  const [newItemName, setNewItemName] = useState("");

  const getDataByCategory = (category: DataCategory): DataItem[] => {
    switch (category) {
      case "arts": return artsData;
      case "payments": return paymentsData;
      case "admin": return adminData;
      case "managers": return managersData;
      case "teachers": return teachersData;
      case "owner": return ownerData;
    }
  };

  const setDataByCategory = (category: DataCategory, data: DataItem[]) => {
    switch (category) {
      case "arts": setArtsData(data); break;
      case "payments": setPaymentsData(data); break;
      case "admin": setAdminData(data); break;
      case "managers": setManagersData(data); break;
      case "teachers": setTeachersData(data); break;
      case "owner": setOwnerData(data); break;
    }
  };

  const restoreDefaults = (category: DataCategory) => {
    setIsRestoring(true);
    setTimeout(() => {
      switch (category) {
        case "arts": setArtsData(defaultArtsData); break;
        case "payments": setPaymentsData(defaultPaymentsData); break;
        case "admin": setAdminData(defaultAdminData); break;
        case "managers": setManagersData(defaultManagersData); break;
        case "teachers": setTeachersData(defaultTeachersData); break;
        case "owner": setOwnerData(defaultOwnerData); break;
      }
      setIsRestoring(false);
    }, 500);
  };

  const restoreAll = () => {
    setIsRestoring(true);
    setTimeout(() => {
      setArtsData(defaultArtsData);
      setPaymentsData(defaultPaymentsData);
      setAdminData(defaultAdminData);
      setManagersData(defaultManagersData);
      setTeachersData(defaultTeachersData);
      setOwnerData(defaultOwnerData);
      setIsRestoring(false);
    }, 1000);
  };

  const addItem = (category: DataCategory) => {
    if (!newItemName.trim()) return;
    const newItem: DataItem = {
      id: Date.now().toString(),
      name: newItemName,
      status: "active",
      date: new Date().toISOString().split("T")[0],
    };
    setDataByCategory(category, [...getDataByCategory(category), newItem]);
    setNewItemName("");
  };

  const deleteItem = (category: DataCategory, id: string) => {
    setDataByCategory(
      category,
      getDataByCategory(category).filter((item) => item.id !== id)
    );
  };

  const toggleStatus = (category: DataCategory, id: string) => {
    setDataByCategory(
      category,
      getDataByCategory(category).map((item) =>
        item.id === id
          ? { ...item, status: item.status === "active" ? "inactive" : "active" }
          : item
      )
    );
  };

  const exportData = () => {
    const allData = {
      arts: artsData,
      payments: paymentsData,
      admin: adminData,
      managers: managersData,
      teachers: teachersData,
      owner: ownerData,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(allData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "dragon-arts-settings.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const DataTable = ({ category, icon: Icon, title }: { category: DataCategory; icon: React.ElementType; title: string }) => {
    const data = getDataByCategory(category);
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">{title}</h3>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => restoreDefaults(category)}
            disabled={isRestoring}
            className="gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${isRestoring ? "animate-spin" : ""}`} />
            Restore
          </Button>
        </div>

        <div className="flex gap-2">
          <Input
            placeholder={`Add new ${title.toLowerCase().slice(0, -1)}...`}
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem(category)}
            className="flex-1"
          />
          <Button onClick={() => addItem(category)} size="sm" className="gap-2">
            <Save className="w-4 h-4" />
            Add
          </Button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted">
              <tr>
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left p-3 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-right p-3 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-t hover:bg-muted/50 transition-colors">
                  <td className="p-3 text-sm text-foreground">{item.name}</td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleStatus(category, item.id)}
                      className={`px-2 py-1 text-xs rounded-full font-medium transition-colors ${
                        item.status === "active"
                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                          : "bg-red-100 text-red-700 hover:bg-red-200"
                      }`}
                    >
                      {item.status}
                    </button>
                  </td>
                  <td className="p-3 text-sm text-muted-foreground">{item.date}</td>
                  <td className="p-3 text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteItem(category, item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
              {data.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-muted-foreground">
                    No items found. Add one above or restore defaults.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground/80 hover:text-accent hover:bg-accent/10"
          aria-label="Settings"
        >
          <Settings className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Settings className="w-6 h-6 text-primary" />
            Settings & Data Management
          </DialogTitle>
          <DialogDescription>
            Manage and restore data for arts, payments, admin, managers, teachers, and owner details.
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-2 mb-4">
          <Button onClick={restoreAll} disabled={isRestoring} variant="outline" className="gap-2">
            <RefreshCw className={`w-4 h-4 ${isRestoring ? "animate-spin" : ""}`} />
            Restore All Defaults
          </Button>
          <Button onClick={exportData} variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </Button>
        </div>

        <Tabs defaultValue="arts" className="flex-1 overflow-hidden flex flex-col">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-1 p-1">
            <TabsTrigger value="arts" className="gap-2">
              <Palette className="w-4 h-4" />
              Arts
            </TabsTrigger>
            <TabsTrigger value="payments" className="gap-2">
              <CreditCard className="w-4 h-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="admin" className="gap-2">
              <Shield className="w-4 h-4" />
              Admin
            </TabsTrigger>
            <TabsTrigger value="managers" className="gap-2">
              <UserCog className="w-4 h-4" />
              Managers
            </TabsTrigger>
            <TabsTrigger value="teachers" className="gap-2">
              <GraduationCap className="w-4 h-4" />
              Teachers
            </TabsTrigger>
            <TabsTrigger value="owner" className="gap-2">
              <Crown className="w-4 h-4" />
              Owner
            </TabsTrigger>
          </TabsList>

          <div className="flex-1 overflow-y-auto mt-4">
            <TabsContent value="arts">
              <DataTable category="arts" icon={Palette} title="Arts Programs" />
            </TabsContent>
            <TabsContent value="payments">
              <DataTable category="payments" icon={CreditCard} title="Payment Plans" />
            </TabsContent>
            <TabsContent value="admin">
              <DataTable category="admin" icon={Shield} title="Admin Roles" />
            </TabsContent>
            <TabsContent value="managers">
              <DataTable category="managers" icon={UserCog} title="Managers" />
            </TabsContent>
            <TabsContent value="teachers">
              <DataTable category="teachers" icon={GraduationCap} title="Teachers" />
            </TabsContent>
            <TabsContent value="owner">
              <DataTable category="owner" icon={Crown} title="Owner Details" />
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}

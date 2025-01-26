$HQ_Users_OU = "OU=Users,OU=HQ,DC=wsl2024,DC=org"  
$ShadowGroup = "OU_Shadow"                         
$ShadowGroupPath = "OU=Shadow groups,DC=wsl2024,DC=org"  
$ShadowGroupDN = "CN=$ShadowGroup,$ShadowGroupPath" 

$UsersInHQUsersOU = Get-ADUser -Filter * -SearchBase $HQ_Users_OU -SearchScope Subtree

$CurrentGroupMembers = Get-ADGroupMember -Identity $ShadowGroupDN -Recursive | Where-Object { $_.objectClass -eq "user" }

foreach ($User in $UsersInHQUsersOU) {
    if (-not ($CurrentGroupMembers | Where-Object { $_.DistinguishedName -eq $User.DistinguishedName })) {
        Add-ADGroupMember -Identity $ShadowGroupDN -Members $User.SamAccountName
        
    }
}
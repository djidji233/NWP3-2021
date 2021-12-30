package rs.raf.NWP3.bootstrap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import rs.raf.NWP3.model.Permission;
import rs.raf.NWP3.model.PermissionType;
import rs.raf.NWP3.model.User;
import rs.raf.NWP3.repository.PermissionRepository;
import rs.raf.NWP3.repository.UserRepository;

import java.util.Arrays;

@Component
public class BootstrapData implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PermissionRepository permissionRepository;

    private final PasswordEncoder passwordEncoder;

    @Autowired
    public BootstrapData(UserRepository userRepository, PasswordEncoder passwordEncoder, PermissionRepository permissionRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.permissionRepository = permissionRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Loading Data...");

        String[] FIRST_NAME_LIST = {"John-James", "Justine", "Ahsan", "Leja", "Jad", "Vernon", "Cara", "Eddison", "Eira", "Emily"};
        String[] LAST_NAME_LIST = {"Booker", "Summers", "Reyes", "Rahman", "Crane", "Cairns", "Hebert", "Bradshaw", "Shannon", "Phillips"};
        User user1 = new User();
        user1.setFirstName("user1");
        user1.setLastName("user1last");
        user1.setEmail("user1@mail.com");
        Permission create_permission = new Permission(1L,PermissionType.CAN_CREATE_USERS, true, user1);
        Permission read_permission = new Permission(2L,PermissionType.CAN_READ_USERS, true, user1);
        Permission update_permission = new Permission(3L,PermissionType.CAN_UPDATE_USERS, true, user1);
        Permission delete_permission = new Permission(4L,PermissionType.CAN_DELETE_USERS, true, user1);
        user1.setPermissions(Arrays.asList(create_permission,read_permission,update_permission,delete_permission));
        user1.setPassword(this.passwordEncoder.encode("user1"));
        this.userRepository.save(user1);
        this.permissionRepository.save(create_permission);
        this.permissionRepository.save(read_permission);
        this.permissionRepository.save(update_permission);
        this.permissionRepository.save(delete_permission);

        System.out.println("Data loaded!");
    }
}

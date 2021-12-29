//package rs.raf.NWP3.bootstrap;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Component;
//import rs.raf.NWP3.model.Permission;
//import rs.raf.NWP3.model.PermissionType;
//import rs.raf.NWP3.model.User;
//import rs.raf.NWP3.repository.UserRepository;
//
//import java.util.Arrays;
//
//@Component
//public class BootstrapData implements CommandLineRunner {
//
//    private final UserRepository userRepository;
//
//    private final PasswordEncoder passwordEncoder;
//
//    @Autowired
//    public BootstrapData(UserRepository userRepository, PasswordEncoder passwordEncoder) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    @Override
//    public void run(String... args) throws Exception {
//        System.out.println("Loading Data...");
//
//        String[] FIRST_NAME_LIST = {"John-James", "Justine", "Ahsan", "Leja", "Jad", "Vernon", "Cara", "Eddison", "Eira", "Emily"};
//        String[] LAST_NAME_LIST = {"Booker", "Summers", "Reyes", "Rahman", "Crane", "Cairns", "Hebert", "Bradshaw", "Shannon", "Phillips"};
//        User user1 = new User();
//        user1.setFirst_name("name");
//        user1.setLast_name("lastname");
//        user1.setEmail("myname@email.com");
//        Permission permission = new Permission(1L,PermissionType.CAN_CREATE_USERS, true, user1);
//        user1.setPermissions(Arrays.asList(permission));
//        user1.setPassword(this.passwordEncoder.encode("user1"));
//        this.userRepository.save(user1);
//
//        System.out.println("Data loaded!");
//    }
//}
